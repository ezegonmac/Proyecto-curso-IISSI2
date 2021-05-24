from silence.decorators import endpoint

@endpoint(
    route="/photos",
    method="GET",
    sql="SELECT * FROM Photos ORDER BY date DESC"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="GET",
    sql="SELECT * FROM Photos WHERE photoId = $photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos?userId=$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId ORDER BY date"
)
def get_by_user_id():
    pass

################################################################################

@endpoint(
    route="/photos/valoration",
    method="GET",
    sql="SELECT * FROM Photos ORDER BY valoration DESC"
)
def get_all_ordered_by_valoration():
    pass

###############################################################################

@endpoint(
    route="/photos/comments",
    method="GET",
    sql="SELECT * FROM Photos ORDER BY comments DESC"
)
def get_all_ordered_by_comments():
    pass

###############################################################################

@endpoint(
    route="/photos",
    method="POST",
    sql="INSERT INTO Photos (title, description, url, visibility, userId) VALUES ($title, $description, $url, $visibility, $userId)",
    description="Creates a new photo",
    auth_required=False,
)
def create(title, description, url, visibility, userId):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="PUT",
    sql="UPDATE Photos SET title = $title, description = $description, url = $url, visibility = $visibility WHERE photoId = $photoId",
    description="Updates an existing photo",
    auth_required=False,
)
def update(title, description, url, visibility):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE photoId = $photoId",
    description="Removes a photo",
    auth_required=False,
)
def delete():
    pass