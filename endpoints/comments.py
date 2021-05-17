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
def get_by_id():
    pass