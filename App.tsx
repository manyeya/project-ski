import React from "react";
import { LoaderScreen} from "react-native-ui-lib"
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "./components/Layout";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout>
      <LoaderScreen message={'Message goes here'} />
      </Layout>
    </SafeAreaView>
  );
}
