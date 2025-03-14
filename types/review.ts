export interface IReview {
    id: string
    studentId: {
      name: string
      avatar?: string
    }
    rating: number
    comment: string
    createdAt: string
  }
  
  export interface IReviewStats {
    averageRating: number;
    totalReviews: number;
    ratingBreakdown: Record<string, number>;
}
  
  