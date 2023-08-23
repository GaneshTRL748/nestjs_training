import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedEntityPostAddeddelete1692781835024 implements MigrationInterface {
    name = 'ModifiedEntityPostAddeddelete1692781835024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "deletedAt" TIMESTAMP DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "deletedAt"`);
    }

}
