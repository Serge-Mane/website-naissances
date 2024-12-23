import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "@/services";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationContextProvider";
import { useMutation } from "@tanstack/react-query";

const REQUIRED_FIELD = "Ce champ est requis";
type Credentials = {
    password: string;
    email: string;
};
const schema = yup
    .object({
        email: yup.string().required(REQUIRED_FIELD),
        password: yup.string().required(REQUIRED_FIELD),
    })
    .required();

function Login() {
    const { setToken } = useContext(GlobalApplicationcontext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Credentials>({
        resolver: yupResolver(schema),
    });

    // Mutations
    const mutation = useMutation({
        mutationFn: (credentials: Credentials) => create("sign-in", credentials),
        onSuccess: (data: { bearer }) => {
            // Invalidate and refetch
            setToken({ token: bearer });
            reset();
        },
    });

    const [display, setDisplay] = useState("FORM");
    const onSubmit: SubmitHandler<Credentials> = async (credentials) => {
        mutation.mutate(credentials);
        const response = await create("sign-in", credentials);
        const { status } = response;
        const { bearer } = await response.json();
        if (status === 200) {
            setToken({ token: bearer });
            reset();
            setDisplay("SUCCESS");
        }
    };
    if (display === "SUCCESS") {

        <article className="bg-white text-center px-10 py-10">
            <h1 className="text-3xl mb-6">
                Vous êtes connecté
            </h1>
            <Navigate to={"/private/declarations"} />
        </article>
    }
    return (
        <div className="flex flex-col justify-between md:justify-center">
            <h1 className="p-4 font-bold text-4xl text-center md:hidden">MES NAISSANCES</h1>
            <div className="w-3/4 mx-auto">

                <h1 className="mb-2 text-3xl font-bold">Connectez vous</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Votre email"
                            {...register("email")}
                        />
                        <p className="text-red-600">
                            {errors?.email?.message}
                        </p>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Votre mot de passe"
                            {...register("password")}
                        />
                        <p className="text-red-600">
                            {errors?.password?.message}
                        </p>
                    </div>
                    <button type="submit">Connexion</button>
                </form>


            </div>
            <p className="p-4 text-center md:hidden">&copy; {new Date().getFullYear()} sam.tech</p>
        </div>
    )
}

export default Login