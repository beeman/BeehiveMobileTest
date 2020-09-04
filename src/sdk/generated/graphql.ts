import { gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
import * as ApolloCore from "@apollo/client/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type User = {
    __typename?: "User";
    id?: Maybe<Scalars["Float"]>;
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
};

export type UserToken = {
    __typename?: "UserToken";
    token: Scalars["String"];
    user: User;
};

export type Lesson = {
    __typename?: "Lesson";
    id?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
};

export type Course = {
    __typename?: "Course";
    id?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    imageUrl?: Maybe<Scalars["String"]>;
    lessons?: Maybe<Array<Lesson>>;
    author?: Maybe<User>;
};

export type Query = {
    __typename?: "Query";
    uptime: Scalars["Float"];
    courses?: Maybe<Array<Course>>;
    course?: Maybe<Course>;
};

export type QueryCourseArgs = {
    id: Scalars["Float"];
};

export type Mutation = {
    __typename?: "Mutation";
    login: UserToken;
    register: UserToken;
    createCourse?: Maybe<Course>;
    updateCourse?: Maybe<Course>;
    deleteCourse?: Maybe<Scalars["Boolean"]>;
    createLesson?: Maybe<Lesson>;
    updateLesson?: Maybe<Lesson>;
    deleteLesson?: Maybe<Scalars["Boolean"]>;
};

export type MutationLoginArgs = {
    input: AuthLoginInput;
};

export type MutationRegisterArgs = {
    input: AuthRegisterInput;
};

export type MutationCreateCourseArgs = {
    input: CreateCourseInput;
};

export type MutationUpdateCourseArgs = {
    input: UpdateCourseInput;
    id: Scalars["Float"];
};

export type MutationDeleteCourseArgs = {
    id: Scalars["Float"];
};

export type MutationCreateLessonArgs = {
    input: CreateLessonInput;
    courseId: Scalars["Float"];
};

export type MutationUpdateLessonArgs = {
    input: UpdateLessonInput;
    lessonId: Scalars["Float"];
};

export type MutationDeleteLessonArgs = {
    lessonId: Scalars["Float"];
};

export type AuthLoginInput = {
    email: Scalars["String"];
    password: Scalars["String"];
};

export type AuthRegisterInput = {
    email: Scalars["String"];
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    password: Scalars["String"];
};

export type CreateCourseInput = {
    title: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    imageUrl?: Maybe<Scalars["String"]>;
};

export type UpdateCourseInput = {
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    imageUrl?: Maybe<Scalars["String"]>;
};

export type CreateLessonInput = {
    title: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
};

export type UpdateLessonInput = {
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
};

export type UptimeQueryVariables = Exact<{ [key: string]: never }>;

export type UptimeQuery = { __typename?: "Query" } & Pick<Query, "uptime">;

export type UserDetailsFragment = { __typename?: "User" } & Pick<
    User,
    "id" | "email" | "firstName" | "lastName"
>;

export type LoginMutationVariables = Exact<{
    input: AuthLoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
    login: { __typename?: "UserToken" } & Pick<UserToken, "token"> & {
            user: { __typename?: "User" } & UserDetailsFragment;
        };
};

export type RegisterMutationVariables = Exact<{
    input: AuthRegisterInput;
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
    register: { __typename?: "UserToken" } & Pick<UserToken, "token"> & {
            user: { __typename?: "User" } & UserDetailsFragment;
        };
};

export const UserDetailsFragmentDoc = gql`
    fragment UserDetails on User {
        id
        email
        firstName
        lastName
    }
`;
export const UptimeDocument = gql`
    query Uptime {
        uptime
    }
`;

@Injectable({
    providedIn: "root",
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
    document = UptimeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const LoginDocument = gql`
    mutation Login($input: AuthLoginInput!) {
        login(input: $input) {
            token
            user {
                ...UserDetails
            }
        }
    }
    ${UserDetailsFragmentDoc}
`;

@Injectable({
    providedIn: "root",
})
export class LoginGQL extends Apollo.Mutation<
    LoginMutation,
    LoginMutationVariables
> {
    document = LoginDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const RegisterDocument = gql`
    mutation Register($input: AuthRegisterInput!) {
        register(input: $input) {
            token
            user {
                ...UserDetails
            }
        }
    }
    ${UserDetailsFragmentDoc}
`;

@Injectable({
    providedIn: "root",
})
export class RegisterGQL extends Apollo.Mutation<
    RegisterMutation,
    RegisterMutationVariables
> {
    document = RegisterDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface WatchQueryOptionsAlone<V>
    extends Omit<ApolloCore.WatchQueryOptions<V>, "query" | "variables"> {}

interface QueryOptionsAlone<V>
    extends Omit<ApolloCore.QueryOptions<V>, "query" | "variables"> {}

interface MutationOptionsAlone<T, V>
    extends Omit<ApolloCore.MutationOptions<T, V>, "mutation" | "variables"> {}

interface SubscriptionOptionsAlone<V>
    extends Omit<ApolloCore.SubscriptionOptions<V>, "query" | "variables"> {}

@Injectable({ providedIn: "root" })
export class ApolloAngularSDK {
    constructor(
        private uptimeGql: UptimeGQL,
        private loginGql: LoginGQL,
        private registerGql: RegisterGQL
    ) {}

    uptime(
        variables?: UptimeQueryVariables,
        options?: QueryOptionsAlone<UptimeQueryVariables>
    ) {
        return this.uptimeGql.fetch(variables, options);
    }

    uptimeWatch(
        variables?: UptimeQueryVariables,
        options?: WatchQueryOptionsAlone<UptimeQueryVariables>
    ) {
        return this.uptimeGql.watch(variables, options);
    }

    login(
        variables: LoginMutationVariables,
        options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>
    ) {
        return this.loginGql.mutate(variables, options);
    }

    register(
        variables: RegisterMutationVariables,
        options?: MutationOptionsAlone<
            RegisterMutation,
            RegisterMutationVariables
        >
    ) {
        return this.registerGql.mutate(variables, options);
    }
}
