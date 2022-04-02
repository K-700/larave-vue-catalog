import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  items?: Maybe<ItemPaginator>;
  name: Scalars['String'];
};


export type GroupItemsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  description: Scalars['String'];
  group: Group;
  id: Scalars['ID'];
  image: Scalars['String'];
  marking: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

/** A paginated list of Item items. */
export type ItemPaginator = {
  __typename?: 'ItemPaginator';
  /** A list of Item items. */
  data: Array<Item>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  group?: Maybe<Group>;
  groups: Array<Group>;
  item?: Maybe<Item>;
  items?: Maybe<ItemPaginator>;
};


export type QueryGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemsArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type GroupQueryVariables = Exact<{
  id: Scalars['ID'];
  itemsFirst: Scalars['Int'];
  itemsPage: Scalars['Int'];
}>;


export type GroupQuery = { __typename?: 'Query', group?: { __typename?: 'Group', id: string, name: string, items?: { __typename?: 'ItemPaginator', paginatorInfo: { __typename?: 'PaginatorInfo', currentPage: number, total: number, lastPage: number }, data: Array<{ __typename?: 'Item', id: string, name: string, description: string, marking: string, image: string, price: number }> } | null } | null };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Group', id: string, name: string }> };


export const GroupDocument = gql`
    query group($id: ID!, $itemsFirst: Int!, $itemsPage: Int!) {
  group(id: $id) {
    id
    name
    items(first: $itemsFirst, page: $itemsPage) {
      paginatorInfo {
        currentPage
        total
        lastPage
      }
      data {
        id
        name
        description
        marking
        image
        price
      }
    }
  }
}
    `;

/**
 * __useGroupQuery__
 *
 * To run a query within a Vue component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGroupQuery({
 *   id: // value for 'id'
 *   itemsFirst: // value for 'itemsFirst'
 *   itemsPage: // value for 'itemsPage'
 * });
 */
export function useGroupQuery(variables: GroupQueryVariables | VueCompositionApi.Ref<GroupQueryVariables> | ReactiveFunction<GroupQueryVariables>, options: VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GroupQuery, GroupQueryVariables>(GroupDocument, variables, options);
}
export function useGroupLazyQuery(variables: GroupQueryVariables | VueCompositionApi.Ref<GroupQueryVariables> | ReactiveFunction<GroupQueryVariables>, options: VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GroupQuery, GroupQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GroupQuery, GroupQueryVariables>(GroupDocument, variables, options);
}
export type GroupQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GroupQuery, GroupQueryVariables>;
export const GroupsDocument = gql`
    query groups {
  groups {
    id
    name
  }
}
    `;

/**
 * __useGroupsQuery__
 *
 * To run a query within a Vue component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGroupsQuery();
 */
export function useGroupsQuery(options: VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, {}, options);
}
export function useGroupsLazyQuery(options: VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GroupsQuery, GroupsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, {}, options);
}
export type GroupsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GroupsQuery, GroupsQueryVariables>;