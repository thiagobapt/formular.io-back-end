import { UUID, randomUUID } from "crypto";
import { Answer } from "src/answer/entities/answer.entity";
import { Form } from "src/form/entity/form.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryColumn({
      length: 36,
      nullable: false,
      default: randomUUID()
    })
  question_id: UUID = randomUUID();

  @ManyToOne(type => Form, form => form.form_id, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  @JoinColumn({name: "form_id", referencedColumnName: "form_id"})
  form: Form;

  @Column({ nullable: false,  type: 'json' })
  question_body: JSON;

  @OneToMany(type => Answer, answer => answer.question, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  answer: Answer

}
