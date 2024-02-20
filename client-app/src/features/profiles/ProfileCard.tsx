import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	Icon,
	Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

interface Props {
	profile: Profile;
}

function truncate(str: string | undefined) {
	if (str) {
		return str.length > 40 ? str.substring(0, 37) + "..." : str;
	}
}

export default observer(function ProfileCard({ profile }: Props) {
	return (
		<Card as={Link} to={`/profiles/${profile.username}`}>
			<Image src={profile.image || "/assets/user.png"} />
			<CardContent>
				<CardHeader>{profile.displayName}</CardHeader>
				<CardDescription>{truncate(profile.bio)}</CardDescription>
			</CardContent>
			<CardContent extra>
				<Icon name="user" />
				{profile.followersCount} followers
			</CardContent>
			<FollowButton profile={profile} />
		</Card>
	);
});
