import emailjs from "@emailjs/browser";

export const sendEmail = (e, setEmailSent) => {
    e.preventDefault();
    emailjs.send(
        "service_qess42q",
        "template_ljefegg",
        {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
            time: new Date().toLocaleString(),
        },
        "Rc9cEhP0HBJ-r_AG4",
    );
    e.target.reset();
    setEmailSent(true);
};
