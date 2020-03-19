import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = useState("english");

    const changeLanguage = (e) => (
        setLanguage(e.target.value)
    )
        return (
            <LanguageContext.Provider value={{ language, changeLanguage }}>
                {props.children}
            </LanguageContext.Provider>
        )
}

// // create a higher order component
// export const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props} />}
//     </LanguageContext.Consumer>
// );