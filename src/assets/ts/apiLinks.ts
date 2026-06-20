const apiBaseUrl = import.meta.env.VITE_API_URL;
const apiUrls:Record<string, string> = {
    auth: apiBaseUrl + 'auth/',
    categories: apiBaseUrl + 'categories/',
    companies: apiBaseUrl + 'companies/',
    jobposts: apiBaseUrl + 'jobposts/',
    settings: apiBaseUrl + 'settings/',
    skills: apiBaseUrl + 'skills/',
    vacationtypes: apiBaseUrl + 'vacationtypes/',
};

export default apiUrls