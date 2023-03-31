import OnboardingForm from "@/components/Onboarding/OnboardingForm";
import Seo from "@/components/Seo";

const OnboardingPage = () => {
  return (
    <>
      <Seo title={"Onboarding"} metaDescription={""} />
      <OnboardingForm />
    </>
  );
};

export default OnboardingPage;
