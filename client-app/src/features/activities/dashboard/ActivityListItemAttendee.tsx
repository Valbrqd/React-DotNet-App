import { observer } from "mobx-react-lite";
import { List, ListItem, Image, Popup, PopupContent } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
	attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({
	attendees,
}: Props) {
	const styles = { borderColor: "orange", borderWidth: 3 };
	return (
		<List horizontal>
			{attendees.map((attendee) => (
				<Popup
					hoverable
					key={attendee.username}
					trigger={
						<ListItem
							key={attendee.username}
							as={Link}
							to={`/profiles/${attendee.username}`}
						>
							<Image
								bordered
								size="mini"
								circular
								src={attendee.image || "/assets/user.png"}
								style={attendee.following ? styles : null}
							/>
						</ListItem>
					}
				>
					<PopupContent>
						<ProfileCard profile={attendee} />
					</PopupContent>
				</Popup>
			))}
		</List>
	);
});
