"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFeedbackStudent1699469094765 = void 0;
class addFeedbackStudent1699469094765 {
    constructor() {
        this.name = 'addFeedbackStudent1699469094765';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "student" ADD "feedback" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "feedback"`);
    }
}
exports.addFeedbackStudent1699469094765 = addFeedbackStudent1699469094765;
//# sourceMappingURL=1699469094765-addFeedbackStudent.js.map