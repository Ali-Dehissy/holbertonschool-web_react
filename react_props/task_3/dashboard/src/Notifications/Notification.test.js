mport { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
	  it("Notifications renders without crashing", () => {
		      const wrapper = shallow(<Notifications />);
		      expect(wrapper.exists()).toEqual(true);
		    });
	  it("Notifications renders three list items", () => {
		      const wrapper = shallow(<Notifications />);
		      wrapper.update();
		      expect(wrapper.find("NotificationItem").first().html()).toEqual(
			            '<li data-notification-type="default">New course available</li>'
			          );
		    }));
