import { Controller, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthGuard } from "@nestjs/passport";

import { AuthService } from "./../services/auth.service";
import { User } from "./../../users/entities/users.entity";
import { CreateUserDto } from "./../../users/dto/users.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }

  @Post("register")
  register(@Req() req: Request) {
    const user = req.body as CreateUserDto;
    return this.authService.register(user);
  }

  @Patch("confirm-email")
  confirmEmail(@Req() req: Request) {
    const token = req.query.token as string;
    return this.authService.confirmEmail(token);
  }

  @Post("forgot-password")
  forgotPassword(@Req() req: Request) {
    console.log("rquest", req.body.email);
    const email = req.body.email as string;
    return this.authService.forgotPassword(email);
  }

  @Patch("reset-password")
  resetPassword(@Req() req: Request) {
    console.log("--data del requ en controller,", req.body);
    const token = req.body.token as string;
    const password = req.body.password as string;
    return this.authService.resetPassword(token, password);
  }

  @Post("validate-token")
  validateToken(@Req() req: Request) {
    const token = req.body.token as string;
    return this.authService.validateToken(token);
  }
}
