import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes>{
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthRoutes, RouteName>,
        StackNavigationProp<AuthRoutes, "Onboarding">
    >;
    route: RouteProp<AuthRoutes, RouteName>;

}

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
}

export type AuthRoutes = {
    Onboarding: undefined;
    Welcome:undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
};

export type HomeRoutes = {

};