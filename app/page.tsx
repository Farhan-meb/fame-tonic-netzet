import AnnouncementBar from "./components/layout/AnnouncementBar";
import LegalDisclaimer from "./components/layout/LegalDisclaimer";
import NavigationBar from "./components/layout/NavigationBar";
import PageLayout from "./components/layout/PageLayout";
import HeroSection from "./components/sections/HeroSection";
import Container from "./components/ui/Container";

export default function HomePage() {
    return (
        <PageLayout>
            <AnnouncementBar />
            <Container>
                <NavigationBar />
                <HeroSection />
                <LegalDisclaimer />
            </Container>
        </PageLayout>
    );
}
