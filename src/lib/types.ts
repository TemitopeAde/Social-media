import { Prisma } from "@prisma/client";

export const userDataSelect = {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
} satisfies Prisma.UserSelect


export const postDataInclude = {
    user: {
        select: userDataSelect
    }
} satisfies Prisma.PostInclude;


export type PostData =  Prisma.PostGetPayload<{
    include: typeof postDataInclude;
}>;




export interface FollowerInfo {
    followers: number;
    isFollowedByUser: boolean;
  }
  
  export interface LikeInfo {
    likes: number;
    isLikedByUser: boolean;
  }
  
  export interface BookmarkInfo {
    isBookmarkedByUser: boolean;
  }
  
  export interface NotificationCountInfo {
    unreadCount: number;
  }
  
  export interface MessageCountInfo {
    unreadCount: number;
  }