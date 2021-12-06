const TODO_REQUIRED_KEYS = ["creator", "title", "tasks"];
const CREATOR_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ]{5,40}$/;
const TITLE_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9]{5,40}$/;
const TASK_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ,_;:\.\-]{5,500}$/;

const VALIDATORS = [CREATOR_REGEXP, TITLE_REGEXP, TASK_REGEXP];

export const verifyTodoPayLoad = (req, res, next) => {
  const { body } = req;
  if (!Boolean(body)) {
    return res.status(400).json({ error: "Cuerpo vacío" });
  } else {
    const keys = Object.keys(body);
    const hasRequiredKeys = TODO_REQUIRED_KEYS.every((key) =>
      keys.includes(key)
    );
    if (!hasRequiredKeys) {
      // Crear listado con los valores requeridos que no fueron enviados
      const missingKeys = TODO_REQUIRED_KEYS.filter(
        (key) => !keys.includes(key)
      );
      return res.status(400).send({
        status: 400,
        error: `Faltan valores requeridos [${missingKeys.join(", ")}]`
      });
    } else {
      const { creator, title, tasks } = body;
      // Validaciones sobre los datos
      const toValidate = [creator, title, tasks];
      const matchRegExp = toValidate.every((value, index) =>
        VALIDATORS[index].test(value)
      );
      if (!matchRegExp) {
        return res.status(400).send({
          status: 400,
          error: "Valores inválidos"
        });
      }
    }
    next();
  }
};
