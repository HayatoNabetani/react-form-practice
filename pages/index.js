import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailDuplicateCheck } from "../utils/EmailDuplicateCheck";

const schema = yup.object({
    email: yup
        .string()
        .email("メールアドレスの形式ではありません。")
        .required("入力必須の項目です。")
        .test(
            "sameEmail",
            "既に使用されているメールアドレスです。",
            (input) => {
                return EmailDuplicateCheck(input);
            }
        ),
    password: yup
        .string()
        .min(8, "8文字以上入力してください。")
        .max(32, "32文字以下を入力してください。"),
});

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="App">
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        {...register("password")}
                        type="password"
                    />
                    <p>{errors.password?.message}</p>
                </div>
                <button type="submit">ログイン</button>
            </form>
        </div>
    );
}

export default App;
