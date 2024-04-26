// Les URLs de ce projet

// Route commune :
const commonPath = "http://localhost:5678/api/"

// Users :
export const URL_SIGNUP = `${commonPath}users/signup` // url pour se connecter => POST
export const URL_SIGN = `${commonPath}users/login` // url pour se connecter => POST

// Categories :
export const URL_GET_CATEGORY = `${commonPath}category` // url pour récupérer les catégories => GET
export const URL_POST_CATEGORY = `${commonPath}category` // url pour créer une catégories => POST

// Tasks :
export const URL_GET_TASKS = `${commonPath}tasks` // url pour récupérer les tâches => GET
export const URL_ADD_TASK = `${commonPath}tasks` // url pour créer une tâche => POST
export const URL_DELETE_TASK = `${commonPath}tasks/id` // PRECISER ID ! => url pour supprimer une tâche => DELETE
export const URL_UPDATE_TASK = `${commonPath}tasks/id` // PRECISER ID ! => url pour mettre à jour une tâche => PUT