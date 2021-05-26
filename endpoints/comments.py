from silence.decorators import endpoint

@endpoint(
    route="/comments",
    method="GET",
    sql="SELECT * FROM comments"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/comments?photoId=$photoId",
    method="GET",
    sql="SELECT * FROM comments WHERE photoId = $photoId"
)
def get_by_photo_id():
    pass

###############################################################################

@endpoint(
    route="/comments",
    method="POST",
    sql="INSERT INTO Comments (userId, photoId, comment, valoration) VALUES ($userId, $photoId, $comment, $valoration)",
    description="Creates a new comment",
    auth_required=False,
)
def create(userId, photoId, comment, valoration):
    pass

###############################################################################

@endpoint(
    route="/comments/$commentId",
    method="PUT",
    sql="UPDATE Comments SET userId = $userId, photoId = $photoId, comment = $comment, valoration = $valoration",
    description="Updates an existing comment",
    auth_required=False,
)
def update(userId, photoId, comment, valoration):
    pass

###############################################################################

@endpoint(
    route="/comments/$commentId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE commentId = $commentId",
    description="Removes a comment",
    auth_required=False,
)
def delete():
    pass