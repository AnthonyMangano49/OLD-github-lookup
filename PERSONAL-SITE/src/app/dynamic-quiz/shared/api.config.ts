let  baseUrl = 'https://api.backendless.com/09CC17DE-A1D2-5E58-FF59-1E73BAF40800/8B920997-09FC-BC85-FFA1-8211B837A300/'

const Api  = {
    register: baseUrl + 'users/register',
    login:  baseUrl + 'users/login',
    scores: baseUrl + 'data/scores?sortBy=quiz_score%20desc'
}

const GuestCredentials = {
    login: 'guest',
    password: 'guest'
}

const ErrorCodes = {
    3003: "invalid login or password",
    3006: "invalid login or password",
    3033: "user already exists",
    8000: "max length exceeded"
}

export {Api, ErrorCodes, GuestCredentials}
