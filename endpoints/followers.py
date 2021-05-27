from silence.decorators import endpoint

###############################################################################

@endpoint(
    route="/followers/$followerId/$followingId",
    method="GET",
    sql="SELECT COUNT(*) FROM Followers WHERE followerId = $followerId AND followingId = $followingId"
)
def get_num_by_ids():
    pass

###############################################################################

@endpoint(
    route="/followers",
    method="POST",
    sql="INSERT INTO Followers (followerId, followingId) VALUES ($followerId, $followingId)",
    description="creates a new follower and following pair",
    auth_required=False
)
def create(followerId, followingId):
    pass

###############################################################################

@endpoint(
    route="/followers/$followerId/$followingId",
    method="DELETE",
    sql="DELETE FROM Followers WHERE followerId = $followerId AND followingId = $followingId",
    description="delete a follower and following pair. You input the followerId and the followingId",
    auth_required=False
)
def delete():
    pass