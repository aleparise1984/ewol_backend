import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserWallet1707159389157 implements MigrationInterface {
    name = 'addUserWallet1707159389157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "wallet" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "wallet"`);
    }

}
