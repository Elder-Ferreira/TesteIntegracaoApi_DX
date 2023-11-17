import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, StyleSheet, View } from "react-native";
import { Appbar, Drawer, Divider, Button } from "react-native-paper";

const Header = ({ title, children }) => {
  const drawer = useRef(null);
  const [drawerPosition] = useState("left");

  const navigationView = () => (
    <View>
      <View>
        <Appbar.Header>
          <Appbar.Content title={title} />
        </Appbar.Header>
      </View>

      <Drawer.Section style={styles.menu}>
        <View style={styles.espacamento} />

        <Drawer.Item
          icon="home"
          label="Home"
          onPress={() => navigation.navigate("HomePage")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Drawer.Item
          icon="#"
          label="#"
          onPress={() => navigation.navigate("#")}
        />
        <Divider />
        <Drawer.Item
          icon="contacts-outline"
          label="Contatos"
          onPress={() => navigation.navigate("Contatos")}
        />
        <Drawer.Item
          icon="file-document-edit-outline"
          label="Termos de uso"
          onPress={() => navigation.navigate("Politica")}
        />
      </Drawer.Section>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Action
            icon="menu"
            color="white"
            onPress={() => drawer.current.openDrawer()}
          />
          <Button
            icon="magnify"
            textColor="white"
            //onPress={() => navigation.navigate("#")}
          />
        </Appbar.Header>
      </View>

      {children}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    backgroundColor: "#9932CC",
  },
  espacamento: {
    paddingTop: 40,
  },
});
export default Header;
