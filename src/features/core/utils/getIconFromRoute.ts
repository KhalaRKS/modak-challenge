import { Icon, IconElement } from '@ui-kitten/components';
import { ROUTES } from '../../presentation/router/routes';
 const icons: {[key:string]: string} = {
    [ROUTES.FAVOURITE]: "star-outline",
    [ROUTES.DETAILS]: "arrow-ios-back-outline" ,
    [ROUTES.HOME]: "home-outline"
    
    
}


export const getIconFromRoute = (route: string = '') => {
return icons[route] || "arrow-ios-back-outline"
}