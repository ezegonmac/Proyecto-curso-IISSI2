from silence.decorators import endpoint

@endpoint(
    route="/categories",
    method="GET",
    sql="SELECT * FROM Categories ORDER BY timesUsed DESC"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/categories/$categorieId",
    method="GET",
    sql="SELECT * FROM Categories WHERE categorieId = $categorieId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/categories/photoId/$photoId",
    method="GET",
    sql="SELECT C.categorieId,`name` FROM Photos P INNER JOIN PhotosCategories PC ON P.photoId = PC.photoId INNER JOIN Categories C ON PC.categorieId = C.categorieId WHERE PC.photoId = $photoId GROUP BY C.categorieId"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/categories",
    method="POST",
    sql="INSERT INTO Categories (name) VALUES ($name)",
    description="Creates a new categorie",
    auth_required=False,
)
def create(name):
    pass

###############################################################################

@endpoint(
    route="/categories/add/$photoId/$categorieId",
    method="POST",
    sql="INSERT INTO PhotosCategories (photoId, categorieId) VALUES ($photoId, $categorieId)",
    description="Add a categorie to a photo",
    auth_required=False,
)
def add_categorie_to_photo(photoId, categorieId):
    pass

###############################################################################

@endpoint(
    route="/categories/create/$name",
    method="POST",
    sql="INSERT INTO Categories (name) VALUES ($name)",
    description="Creates a new categorie",
    auth_required=False,
)
def create_new_categorie(photoId, categorieId):
    pass

###############################################################################

@endpoint(
    route="/categories/$categorieId",
    method="PUT",
    sql="UPDATE Categories SET name = $name WHERE categorieId = $categorieId",
    description="Updates an existing categorie",
    auth_required=False,
)
def update(name):
    pass

###############################################################################

@endpoint(
    route="/categories/$categorieId",
    method="DELETE",
    sql="DELETE FROM Categories WHERE categorieId = $categorieId",
    description="Removes a categorie",
    auth_required=False,
)
def delete():
    pass