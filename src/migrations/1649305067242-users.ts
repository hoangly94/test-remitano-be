import { MigrationInterface, QueryRunner } from "typeorm";

export class users1649305067242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id INT NOT NULL AUTO_INCREMENT, 
                email VARCHAR(255)  NULL, 
                password VARCHAR(255)  NULL, 
                status TINYINT NOT NULL DEFAULT '1', 
                createdBy INT NULL, 
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
                updatedBy INT NULL, 
                updatedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NULL, 
                PRIMARY KEY (id),
                UNIQUE(email),
                INDEX(email),
                INDEX(status),
                INDEX(createdBy),
                INDEX(createdAt),
                INDEX(updatedBy),
                INDEX(updatedAt)
            ) ENGINE = InnoDB;
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users `);
    }

}
