import { MigrationInterface, QueryRunner } from "typeorm";

export class addVideoAskColumn1705591372011 implements MigrationInterface {
    name = 'addVideoAskColumn1705591372011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "video_ask" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "video_ask"`);
    }

}
