import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('users') // table name different from entity name
@ObjectType()
export class User {
  @Field(() => ID) // this is for graphql
  @ObjectIdColumn() // this is for typeorm
  id: ObjectId;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  address: string;
}
