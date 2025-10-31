import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  // ✅ สมัครสมาชิก
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    console.log('📥 Creating user:', createUserDto);

    // ตรวจว่ามีอยู่แล้วไหม
    const exist = await this.userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (exist) {
      if (exist.username === username)
        throw new HttpException(
          'Username already exists',
          HttpStatus.BAD_REQUEST,
        );
      if (exist.email === email)
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    // เข้ารหัสรหัสผ่าน
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, email, password: hashed });

    try {
      const saved = await newUser.save();
      console.log('✅ Saved user:', saved);
      return saved;
    } catch (err) {
      console.error('❌ Save failed:', err);
      throw err;
    }
  }

  // ✅ เข้าสู่ระบบ
  async login(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    const { username, password } = loginUserDto;

    // หา user จาก database
    const user = await this.userModel.findOne({ username });
    if (!user) {
      console.log('❌ User not found');
      throw new Error('User not found');
    }

    // ตรวจสอบ password ด้วย bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('❌ Invalid password');
      throw new Error('Invalid credentials');
    }

    // สร้าง JWT token
    const payload = { username: user.username, sub: user._id };
    const token = this.jwtService.sign(payload);
    console.log('✅ Login success for user:', username);

    return { access_token: token };
  }
  async findOneByUsername(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();
    return user;
  }
}
