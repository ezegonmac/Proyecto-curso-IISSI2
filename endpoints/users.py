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