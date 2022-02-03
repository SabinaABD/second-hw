import React from "react";
import useForm from "../useForm";
import validateTextAreas from "../validateTextAreas";


const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors, handleClear} = useForm(submitForm)

    return (
        <div className="wrapper">
            <div className="form" onSubmit={handleSubmit}>
                <div className="form__title">Создание анкеты</div>
                <form action="#" id="form" className='form__body'>
                    <div className="form__item">
                        <label htmlFor="formName" className="form__label">Имя</label>
                        <input type="text"
                               id="formName"
                               name="name"
                               className="form__input"
                               placeholder="Введите свое имя"
                               value={values.name}
                               onChange={handleChange}
                        />
                        {errors.name && <div>{errors.name}</div>}
                    </div>
                    <div className="form__item">
                        <label htmlFor="formLastName" className="form__label">Фамилия</label>
                        <input type="text"
                               id="formLastName"
                               name='lastName'
                               className='form__input'
                               placeholder='Введите свою фамилию'
                               value={values.lastName}
                               onChange={handleChange}
                        />
                        {errors.lastName && <div>{errors.lastName}</div>}
                    </div>
                    <div className="form__item" >
                        <label htmlFor="formBirthDate" className="form__label">Дата рождения </label>
                        <input type="date"
                               id="formBirthDate"
                               name='date'
                               className='form__input'
                               value={values.date}
                               onChange={handleChange}
                        />
                        {errors.date && <div>{errors.date}</div>}
                    </div>
                    <div className="form__item">
                        <label htmlFor="formPhoneNumber" className="form__label">Телефон</label>
                        <input type="tel"
                               id="formPhoneNumber"
                               name='phone'
                               className='form__input'
                               placeholder='Введите номер телефона в формате 8-8888-88-88'
                               value={values.phone}
                               onChange={handleChange}
                        />
                        {errors.phone && <div>{errors.phone}</div>}
                    </div>
                    <div className="form__item">
                        <label htmlFor="formSite" className="form__label">Сайт</label>
                        <input type="text"
                               id="formSite"
                               name='site'
                               className='form__input'
                               placeholder='Введите адрес личного сайта в формате https://siteadress.com'
                               value={values.site}
                               onChange={handleChange}
                        />
                        {errors.site && <div>{errors.site}</div>}
                    </div>
                    <div className="form__item">
                        <label htmlFor="formAboutUser" className="form__label">О себе</label>
                        <div className="form__item-input">
                                <textarea name="aboutUser"
                                          id="formAboutUser"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='О себе'
                                          value={values.aboutUser}
                                          onChange={handleChange}
                                />
                            <div className="result">{validateTextAreas(values.aboutUser)}</div>
                            {errors.aboutUser && <div>{errors.aboutUser}</div>}
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="formTechnologies" className="form__label">Стек технологий</label>
                        <div className="form__item-input">
                                <textarea name="technologies"
                                          id="formTechnologies"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='Стек технологий'
                                          value={values.technologies}
                                          onChange={handleChange}
                                />
                            <div className="result">{validateTextAreas(values.technologies)}</div>
                            {errors.technologies && <div>{errors.technologies}</div>}
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="formLastProject" className="form__label">Описание последнего проекта</label>
                        <div className="form__item-input">
                                <textarea name="lastProject"
                                          id="formLastProject"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='Добавьте писание последнего проекта'
                                          value={values.lastProject}
                                          onChange={handleChange}
                                />
                            <div className="result">{validateTextAreas(values.lastProject)}</div>
                            {errors.lastProject && <div>{errors.lastProject}</div>}
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button className="form__buttons-item"
                                type='submit' >
                            Сохранить
                        </button>
                        <button className="form__buttons-item"
                                type='reset' onClick={handleClear}>
                            Очистить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSignUp