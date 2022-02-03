export default function validateInfo(values) {
    const errorMessage = 'Поле не может быть пустым'
    let errors = {}

    //Name
    if(!values.name.trim()) {
        errors.name = errorMessage
    } else if(!values.name.match(/^([А-Я])|([A-Z])/)) {
        errors.name = 'Имя должно начинаться с заглавной буквы'
    }

    //LastName
    if(!values.lastName.trim()) {
        errors.lastName = errorMessage
    } else if(!values.lastName.match(/^([А-Я])|([A-Z])/)) {
        errors.lastName = 'Фамилия должна начинаться с заглавной буквы'
    }

    //date
    if (values.date === '') {
        errors.date = errorMessage
    }

    //phone
    if(!values.phone.trim()) {
        errors.phone = errorMessage
    } else if (!values.phone.match(/^\d(\-)(\d{4})(\-)(\d{2})(\-)(\d{2})$/)) {
        errors.phone = 'Неверный формат номера'
    }

    //site
    if (!values.site.trim()) {
        errors.site = errorMessage
    } else if (!values.site.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)) {
        errors.site = 'Неверный формат сайта'
    }

    //aboutUser
    if(!values.aboutUser.trim()) {
        errors.aboutUser = errorMessage
    } else if(values.aboutUser.length > 600) {
        errors.aboutUser = 'Превышен лимит символов в поле'
    }

    //technologies
    if(!values.technologies.trim()) {
        errors.technologies = errorMessage
    } else if(values.technologies.length > 600) {
        errors.technologies = 'Превышен лимит символов в поле'
    }

    //lastProject
    if(!values.lastProject.trim()) {
        errors.lastProject = errorMessage
    } else if(values.lastProject.length > 600) {
        errors.lastProject = 'Превышен лимит символов в поле'
    }

    return errors
}