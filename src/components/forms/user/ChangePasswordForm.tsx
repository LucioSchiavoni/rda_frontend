import { useForm } from "react-hook-form";
import { changePassword } from "../../../api/auth";
import { toast } from "react-toastify";
import { useAuthStore } from "../../../context/auth/store";

interface PasswordInput {
  password: string;
  confirmPassword: string;
}

const ChangePasswordForm = () => {
  const { register, handleSubmit,   watch, formState: { errors } } = useForm<PasswordInput>(); 
  const user = useAuthStore((state) => state.profile);
  const userId = user.id;

  const onSubmit = async (data: PasswordInput) => {     
    
    try {
      const res = await changePassword(userId, data.password);
      toast.success(res.success);
      console.log(res.success);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-thin mb-12 dark:text-white">
        Ingresa una nueva contraseña
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="dark:text-white text-xl mb-2 font-medium"
          >
            Nueva contraseña
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Este campo es requerido",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            className="px-4 border py-3 text-xl rounded-md shadow-xl mb-4"
          />
              {errors.password && (
            <span className="text-red-800 text-xl px-2 py-1">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="dark:text-white text-xl mb-2 font-medium"
          >
            Repetir contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
            className="px-4 border py-3 text-xl rounded-md shadow-xl mb-4"
          />
          {errors.confirmPassword && (
            <span className="text-red-800 text-xl px-2 py-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="px-3 py-2 text-xl font-medium hover:bg-blue-700 rounded-md text-white bg-blue-900"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
