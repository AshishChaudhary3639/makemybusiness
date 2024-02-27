# PROJECT NAME : MAKEMYBUSINESS

## FRONTEND (REACT, REDUX TOOL KIT, BOOTSTRAP)

SRC
|---LAYOUTS
|   |--FrontLayout.js
|   |--AdminLayout.js
|   |--SellerLayout.js
|
|---COMPONENTS
|   |--AUTH
|   |  |--Login.jsx
|   |  |--Signup.jsx
|   |  |--CreatePassword.jsx
|   |  |--EmailVerification.jsx
|   |--ADMIN
|   |  |--USERS
|   |  |  |--UserList.jsx
|   |  |  |--UserCreate.jsx
|   |  |  |--UserEdit.jsx
|   |  |  |--UserRole.jsx
|   |  |  
|   |  |--DASHBOARD
|   |  |  |--Analytics.jsx
|   |  |  |--Charts.jsx
|   |  |
|   |  |--PROJECTS
|   |  |
|   |--SELLERS
|   
|
|---PAGES
|---API_DATA
|---ASSETS
|---REDUX

BACKEND
|---SRC
|    |---CONTROLLERS
|    |---MODELS
|    |   |
|    |   |--RoleModel.js  [ROLE MODE TO STORE ROLES FOR THE DIFFERENT TYPES OF USER'S PREVILIGESS]
|    |   |  |--_id (INTEGER, STORE AS A FOREIGEN KEY IN THE USER MODEL)
|    |   |  |--roleName (STRING)
|    |   |  |--creaetdAt (TIMESTAMP)
|    |   |  |--updatedAt (TIMESTAMP)
|    |   |
|    |   |--[UserModel.js](https://eraser.io) 
|    |   |  |--_id (INTEGER)
|    |   |  |--firstName (STRING)
|    |   |  |--lastName (STRING)
|    |   |  |--images ([profileImage, profileCover])
|    |   |  |--emailId (STRING)
|    |   |  |--verificationStatus (BOOLEAN, DEFAULT 0)
|    |   |  |--phoneNumber (STRING)
|    |   |  |--roleId (INTEGER FOREIGEN KEY OF ROLE TABLE)
|    |   |  |--createdAt (TIMESTAMP)
|    |   |  |--updatedAt (TIMESTAMP)
|    |   |   
|    |   |--SessionModel.js
|    |   |  |--_id (INTEGER)
|    |   |  |--userId (INTEGER, FOREIGEN KEY OF USER)
|    |   |  |--token (STRING)
|    |   |  |--creaetdAt (TIMESTAMP)
|    |   |  |--updatedAt (TIMESTAMP)
|    |   |  
|    |   |--ProjectCategoryModel.js
|    |   |  |--_id (INTEGER)
|    |   |  |--categoryName ([], REQUIRED)
|    |   |  |--categoryDescription (LONG TEXT)
|    |   |  |--categoryImage (STRING)
|    |   |  |--categoryStatus (BOOLEAN, DEFAULT 0)
|    |   |  |--userId (INTEGER, FOREIGEN KEY OF USER)
|    |   |  |--creaetdAt (TIMESTAMP)
|    |   |  |--updatedAt (TIMESTAMP)
|    |   
|    |   |--ProjectModel.js
|    |   |  |--_id (INTEGER)
|    |   |  |--projectName (STRING, REQUIRED)
|    |   |  |--projectDescription (LONG TEXT)
|    |   |  |--projectImages ([])
|    |   |  |--projectFile (STRING, REQUIRED)
|    |   |  |--projectStatus (BOOLEAN, DEFAULT 0)
|    |   |  |--projectType (['Paid', 'Free'])
|    |   |  |--projectPrice (INTEGER, DEFAULT 00)
|    |   |  |--CategoryId (INTEGER, FOREIGEN KEY OF CATEGORY)
|    |   |  |--userDetails ([USER_ID, PROJECT_LIVE_URL])
|    |   |  |--creaetdAt (TIMESTAMP)
|    |   |  |--updatedAt (TIMESTAMP)
|    |   
|    |---MIDDLEWARES
|    |---CONFIG
|    |---ROUTES
|    |---UTILS


updated