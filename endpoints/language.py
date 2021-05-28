from silence.decorators import endpoint

@endpoint(
    route="/innapropiatewords",
    method="GET",
    sql="SELECT * FROM InapropiateWords"
)
def get_all():
    pass

###############################################################################