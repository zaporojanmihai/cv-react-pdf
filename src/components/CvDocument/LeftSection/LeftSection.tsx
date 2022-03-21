import {Image, Link, StyleSheet, View, Svg, Path, G} from "@react-pdf/renderer";
import React from "react";
import Text from "../elements/Text";
import LeftSectionPanel from "./LeftSectionPanel";
import SkillItem from "./SkillItem";
import ContactItem from "./ContactItem";

const LeftSection = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} src="/images/profile-photo-zoomed.jpg" />
      </View>
      <LeftSectionPanel title={'Contact'}>
        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.235)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M37.812,40.633 C38.437,40.633 38.958,40.421 39.374,39.998 C39.791,39.575 39.999,39.46 39.999,38.412 L39.999,38.412 L39.999,30.481 C39.999,29.846 39.791,29.317 39.374,28.895 C38.958,28.471 38.437,28.260 37.812,28.260 C35.243,28.260 32.604,27.837 29.895,26.991 C28.923,26.709 28.194,26.885 27.708,27.520 L27.708,27.520 L22.812,32.490 C16.354,29.106 11.458,24.136 8.124,17.579 L8.124,17.579 L13.20,12.609 C13.645,11.975 13.819,11.234 13.541,10.388 C12.638,7.850 12.187,5.136 12.187,2.246 C12.187,1.611 11.979,1.82 11.562,0.659 C11.145,0.236 10.624,0.24 9.999,0.24 L9.999,0.24 L2.187,0.24 C1.562,0.24 1.41,0.236 0.624,0.659 C0.208,1.82 0.0,1.611 0.0,2.246 C0.0,12.891 3.680,21.950 11.41,29.423 C18.402,36.896 27.326,40.633 37.812,40.633 Z"/>
              </G>
            </Svg>
          )}
          text={'(+40) 751 077 097'}
          link={'tel:+40751077097'}
        />

        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.23)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M42.723,34.830 C41.871,35.698 40.889,36.133 39.776,36.133 L4.223,36.133 C3.110,36.133 2.127,35.698 1.276,34.830 C0.425,33.962 0.0,32.960 0.0,31.825 L0.0,5.175 C0.0,4.40 0.425,3.38 1.276,2.170 C2.127,1.302 3.110,0.867 4.223,0.867 L39.776,0.867 C40.889,0.867 41.871,1.302 42.723,2.170 C43.574,3.38 43.999,4.40 43.999,5.175 L43.999,31.825 C43.999,32.960 43.574,33.962 42.723,34.830 ZM39.368,5.570 L21.999,17.604 L4.631,5.570 L4.631,9.992 L21.999,22.26 L39.368,9.992 L39.368,5.570 Z"/>
              </G>
            </Svg>
          )}
          text={'radu@nemerenco.com'}
          link={'mailto:radu@nemerenco.com'}
        />

        <ContactItem
          icon={(
            <Svg width="6.4px" height="10px">
              <G transform="scale(0.185)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M31.885,27.771 C30.662,31.591 29.321,34.956 27.864,37.869 C26.406,40.781 24.713,43.741 22.784,46.749 C20.856,49.757 19.516,51.786 18.764,52.836 C18.11,53.887 17.400,54.698 16.929,55.271 L12.697,49.542 C9.875,45.627 7.54,40.519 4.232,34.217 C1.410,27.914 0.0,22.328 0.0,17.459 C0.0,12.685 1.669,8.626 5.8,5.284 C8.347,1.942 12.321,0.271 16.929,0.271 C21.538,0.271 25.489,1.942 28.781,5.284 C32.73,8.626 33.719,12.685 33.719,17.459 C33.719,20.514 33.107,23.952 31.885,27.771 ZM22.502,12.16 C20.950,10.393 19.93,9.581 16.929,9.581 C14.766,9.581 12.885,10.393 11.286,12.16 C9.687,13.639 8.888,15.549 8.888,17.745 C8.888,19.941 9.687,21.827 11.286,23.403 C12.885,24.978 14.766,25.766 16.929,25.766 C19.93,25.766 20.974,25.2 22.573,23.474 C24.78,21.851 24.830,19.941 24.830,17.745 C24.830,15.549 24.54,13.639 22.502,12.16 Z"/>
              </G>
            </Svg>
          )}
          text={'Cluj-Napoca, Romania'}
        />

        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.2)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M42.968,43.574 C42.281,44.350 41.440,44.737 40.447,44.737 L3.781,44.737 C2.788,44.737 1.909,44.350 1.145,43.574 C0.381,42.799 0.0,41.907 0.0,40.899 L0.0,3.558 C0.0,2.550 0.362,1.716 1.88,1.57 C1.814,0.398 2.711,0.69 3.781,0.69 L40.447,0.69 C41.440,0.69 42.281,0.398 42.968,1.57 C43.656,1.716 43.999,2.550 43.999,3.558 L43.999,40.899 C43.999,41.907 43.656,42.799 42.968,43.574 ZM7.333,37.293 L13.635,37.293 L13.635,17.401 L7.333,17.401 L7.333,37.293 ZM13.177,8.502 C12.565,7.843 11.763,7.513 10.770,7.513 C9.777,7.513 8.956,7.843 8.307,8.502 C7.657,9.161 7.333,9.995 7.333,11.3 C7.333,11.934 7.638,12.748 8.249,13.446 C8.860,14.66 9.663,14.376 10.656,14.376 C11.649,14.376 12.470,14.47 13.119,13.388 C13.769,12.729 14.93,11.934 14.93,11.3 C14.93,9.995 13.788,9.161 13.177,8.502 ZM36.666,25.660 C36.666,22.791 35.998,20.619 34.661,19.146 C33.324,17.672 31.586,16.936 29.447,16.936 C27.156,16.936 25.246,18.21 23.718,20.193 L23.718,17.401 L17.416,17.401 L17.416,37.293 L23.718,37.293 L23.718,26.9 C23.718,25.234 23.795,24.691 23.947,24.380 C24.558,22.829 25.628,22.54 27.156,22.54 C29.295,22.54 30.364,23.489 30.364,26.358 L30.364,37.293 L36.666,37.293 L36.666,25.660 Z"/>
              </G>
            </Svg>
          )}
          text={'in/radunemerenco'}
          link={'www.linkedin.com/in/radunemerenco'}
        />

        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.2)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M43.999,32.785 C43.999,36.197 42.815,39.86 40.447,41.451 C38.79,43.817 35.215,44.999 31.854,44.999 C29.715,44.999 27.805,44.534 26.124,43.603 C24.902,43.836 23.604,43.952 22.229,43.952 C16.423,43.952 11.477,41.897 7.390,37.787 C3.303,33.677 1.260,28.714 1.260,22.898 C1.260,21.967 1.413,20.571 1.718,18.710 C0.572,16.616 0.0,14.561 0.0,12.545 C0.0,9.132 1.183,6.244 3.552,3.878 C5.920,1.513 8.784,0.330 12.145,0.330 C14.513,0.330 16.690,0.951 18.677,2.191 C19.440,2.37 20.624,1.959 22.229,1.959 C28.34,1.959 32.980,3.994 37.67,8.66 C41.154,12.137 43.197,17.81 43.197,22.898 C43.197,24.681 43.45,26.193 42.739,27.434 C43.579,29.140 43.999,30.924 43.999,32.785 ZM33.572,24.526 C33.38,23.518 32.235,22.665 31.166,21.967 C30.326,21.424 29.142,20.881 27.614,20.338 C26.545,20.28 24.979,19.640 22.916,19.175 C21.388,18.787 20.433,18.554 20.51,18.477 L18.333,17.779 C18.104,17.702 17.722,17.391 17.187,16.849 C16.881,16.383 16.729,15.995 16.729,15.685 C16.729,14.832 17.149,14.134 17.989,13.591 C18.829,13.49 20.51,12.777 21.656,12.777 C23.413,12.777 24.597,13.49 25.208,13.591 C25.742,14.57 26.354,14.832 27.41,15.918 C27.347,16.461 27.767,17.3 28.302,17.547 C28.836,17.934 29.447,18.128 30.135,18.128 C30.899,18.128 31.586,17.818 32.197,17.197 C32.808,16.577 33.114,15.918 33.114,15.220 C33.114,14.444 32.885,13.630 32.426,12.777 C31.892,11.924 31.204,11.148 30.364,10.451 C29.447,9.753 28.302,9.171 26.927,8.706 C25.781,8.318 24.138,8.124 21.999,8.124 C19.479,8.124 17.454,8.434 15.927,9.55 C14.170,9.753 12.795,10.722 11.801,11.963 C10.885,13.203 10.426,14.600 10.426,16.151 C10.426,17.857 10.847,19.253 11.687,20.338 C12.451,21.346 13.673,22.238 15.354,23.14 C17.34,23.712 18.867,24.255 20.854,24.642 C23.145,25.108 24.444,25.418 24.749,25.573 C25.590,25.806 26.315,26.232 26.927,26.853 C27.461,27.318 27.729,27.977 27.729,28.830 C27.729,29.916 27.232,30.808 26.239,31.505 C25.246,32.203 23.833,32.552 21.999,32.552 C20.854,32.552 19.822,32.359 18.906,31.971 C18.218,31.661 17.645,31.234 17.187,30.691 C16.729,30.71 16.309,29.334 15.927,28.481 C15.621,27.783 15.239,27.201 14.781,26.736 C14.322,26.271 13.711,26.38 12.947,26.38 C12.31,26.38 11.305,26.310 10.770,26.853 C10.159,27.473 9.854,28.132 9.854,28.830 C9.854,30.148 10.312,31.428 11.229,32.669 C12.69,33.832 13.215,34.840 14.666,35.693 C16.652,36.779 19.135,37.322 22.114,37.322 C24.788,37.322 27.3,36.934 28.760,36.159 C30.746,35.305 32.159,34.220 32.999,32.902 C33.916,31.661 34.374,30.110 34.374,28.249 C34.374,26.775 34.107,25.534 33.572,24.526 Z"/>
              </G>
            </Svg>
          )}
          text={'Radu Nemerenco'}
          link={'https://join.skype.com/invite/ozQ1Vm45pvMD'}
        />
      </LeftSectionPanel>

      <LeftSectionPanel title="Skills">
        <SkillItem years={12} name="JavaScript" />
        <SkillItem years={7} name="ReactJS" />
        <SkillItem years={5} name="React Native" />
        <SkillItem years={5} name="TypeScript" />
        <SkillItem years={4} name="NodeJS" />
        <SkillItem years={4} name="Redux" />
        <SkillItem years={4} name="Unit Testing" />
        <SkillItem years={4} name="PostgresQL" />
        <SkillItem years={3} name="MongoDB" />
        <SkillItem years={3} name="Java" />
        <SkillItem years={3} name="Spring Framework" />
        <SkillItem years={7} name="Rest API" />
        <SkillItem years={4} name="GraphQL" />
        <SkillItem years={3} name="WebSocket" />
        <SkillItem years={5} name="WebPack" />
        <SkillItem years={3} name="Styled Components" />
        <SkillItem years={3} name="Docker" />
        <SkillItem years={2} name="AWS" />
      </LeftSectionPanel>

      <LeftSectionPanel title="Education">
        <Text contrast isBold>Technical University of Moldova</Text>
        <Text contrast>BA in Computer Science</Text>
        <Text contrast>Chisinau, 2011 - 2015</Text>
      </LeftSectionPanel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#434244',
    width: '30%',
  },
  profilePictureContainer: {
    width: '93%',
    marginHorizontal: 'auto',
    marginBottom: 15
  },
  profilePicture: {
    borderRadius: 9999,
    transform: 'translateY(10p0x)'
  },
})

export default LeftSection;
