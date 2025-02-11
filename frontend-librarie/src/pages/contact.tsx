import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import SuccessAlert from "@/components/alert.tsx";

export default function ContactPage() {

  // récupérer les données du form
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    socity: "",
    message: "",
  });

  const [alert, setAlert] = useState<{ message: string; type: string } | null>(
      null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const { nom, email, socity, message } = formData;

    const mailtoLink = `mailto:aurelie.moustardier@outlook.fr?subject=Contact depuis le site&body=Nom: ${nom}%0D%0AEmail: ${email}%0D%0ASociété: ${socity}%0D%0AMessage: ${encodeURIComponent(
      message,
    )}`;

    // ajoute une alerte
    setAlert({ message: "Merci pour votre message !", type: "Envoi réussi," });

    // Ouvre le client de messagerie
    window.location.href = mailtoLink;
    resetForm()

  };

  // Fonction qui permet de vider les champs du formulaire
  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      socity: "",
      message: "",
    });
  };

  return (
    <DefaultLayout>
      {alert && <SuccessAlert message={alert.message} type={alert.type} />}
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center pb-8">
          <h1 className={title()}>Me contacter</h1>
        </div>
        <Form
          className="w-full max-w-xs flex flex-col items-center justify-center"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-8 pb-8">
            <Input
              isRequired
              label="Nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
            />
            <Input
              isRequired
              errorMessage="Merci de noter une adresse mail valide"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Société"
              name="socity"
              type="text"
              value={formData.socity}
              onChange={handleChange}
            />
            <Textarea
              isRequired
              label="Message"
              name="message"
              placeholder="Entrez votre message..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button color="secondary" size="lg" type="submit" variant="ghost">
            Envoyer
          </Button>
        </Form>
      </section>
    </DefaultLayout>
  );
}
