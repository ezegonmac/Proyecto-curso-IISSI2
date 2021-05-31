from silence.decorators import endpoint

@endpoint(
    route="/users",
    method="GET",
    sql="SELECT * FROM Users"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/users/$userId",
    method="GET",
    sql="SELECT * FROM Users WHERE userId = $userId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/users/followers",
    method="GET",
    sql="SELECT * FROM Users ORDER BY followers DESC"
)
def get_all_ordered_by_followers():
    pass

###############################################################################

@endpoint(
    route="/users/valoration",
    method="GET",
    sql="SELECT * FROM Users ORDER BY valoration DESC"
)
def get_all_ordered_by_punctuation():
    pass

###############################################################################

@endpoint(
    route="/users",
    method="POST",
    sql="INSERT INTO Users (username, name, surnames, avatar, phone, email) VALUES ($username, $name, $surnames, $avatar, $phone, $email)",
    description="creates a new user",
    auth_required=False
)
def create(username,name,surnames,avatar,phone,email):
    pass

###############################################################################

@endpoint(
    route="/users/$userId",
    method="PUT",
    sql="UPDATE Photos SET username=$username, name=$name, surnames=$surnames, avatar=$avatar, phone=$phone, followers=$followers, following=$following WHERE userId = $userId",
    description="Updates an existing user",
    auth_required=False
)
def update(username, name, surnames, avatar, phone, followers, following):
    pass

###############################################################################

@endpoint(
    route="/users/$userId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE userId = $userId",
    description="Removes an user",
    auth_required=False
)
def delete():
    pass