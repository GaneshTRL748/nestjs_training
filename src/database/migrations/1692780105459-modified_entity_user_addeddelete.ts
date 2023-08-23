import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedEntityUserAddeddelete1692780105459 implements MigrationInterface {
    name = 'ModifiedEntityUserAddeddelete1692780105459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
