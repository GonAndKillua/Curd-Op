import Auth from "../model/auth.js";

export const getAuth = async (request, response) => {
  const data = request.body;
  const email = data.email;
  const password = data.password;

  try {
    // finding something inside a model is time taking, so we need to add await
    const users = await Auth.find({ email });
    const dataToBeSend = {
      email: users[0].email,
      isAdmin: users[0].isAdmin,
    };

    response.status(200).json(dataToBeSend);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addAuth = async (request, response) => {
  const auth = request.body;
  console.log(auth);

  const newAuth = new Auth(auth);
  try {
    await newAuth.save();
    response.status(201).json(newAuth);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
