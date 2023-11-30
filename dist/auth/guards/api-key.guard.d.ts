import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigType } from '@nestjs/config';
import { Observable } from 'rxjs';
import config from './../../config';
export declare class ApiKeyGuard implements CanActivate {
    private reflector;
    private configService;
    constructor(reflector: Reflector, configService: ConfigType<typeof config>);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
