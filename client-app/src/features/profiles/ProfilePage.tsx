import { Grid, GridColumn } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer(function ProfilePage() {
    const { username } = useParams();
    const { profileStore } = useStore();
    const { loadProfile, profile, loadingProfile, setActiveTab } = profileStore;

    useEffect(() => {
        loadProfile(username!);
        return () => {
            setActiveTab(0);
        };
    }, [loadProfile, username, setActiveTab]);

    if (loadingProfile)
        return <LoadingComponent content="Loading profile..." />;

    return (
        <Grid>
            <GridColumn width={16}>
                {profile && (
                    <>
                        <ProfileHeader profile={profile} />
                        <ProfileContent profile={profile} />
                    </>
                )}
            </GridColumn>
        </Grid>
    );
});
