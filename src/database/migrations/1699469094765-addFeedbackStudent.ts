import { MigrationInterface, QueryRunner } from "typeorm";

export class addFeedbackStudent1699469094765 implements MigrationInterface {
    name = 'addFeedbackStudent1699469094765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "feedback" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "feedback"`);
    }

}
