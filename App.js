import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

export default function App() {
  function SvgTop() {
    return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 375 375'>
        <Defs>
          <ClipPath id='a'>
            <Path d='M27.465 9.66h320.07v320.074H27.465Zm0 0' />
          </ClipPath>
          <ClipPath id='b'>
            <Path d='M187.5 9.66C99.113 9.66 27.465 81.313 27.465 169.7c0 88.382 71.648 160.034 160.035 160.034S347.535 258.082 347.535 169.7C347.535 81.312 275.887 9.66 187.5 9.66' />
          </ClipPath>
          <ClipPath id='c'>
            <Path d='M36 44h303v306H36Zm0 0' />
          </ClipPath>
          <ClipPath id='d'>
            <Path d='M0 216.742 187.738 29.008 374.941 216.21 187.207 403.949Zm0 0' />
          </ClipPath>
          <ClipPath id='e'>
            <Path d='M0 216.742 187.738 29.008 374.941 216.21 187.207 403.949Zm0 0' />
          </ClipPath>
          <ClipPath id='f'>
            <Path d='M0 216.742 187.738 29.008 374.941 216.21 187.207 403.949Zm0 0' />
          </ClipPath>
        </Defs>
        <G clipPath='url(#a)'>
          <G clipPath='url(#b)'>
            <Path fill='#008037' d='M27.465 9.66h320.07v320.074H27.465Zm0 0' />
          </G>
        </G>
        <G clipPath='url(#c)'>
          <G clipPath='url(#d)'>
            <G clipPath='url(#e)'>
              <G clipPath='url(#f)'>
                <Path
                  fill='#fff'
                  d='m37.285 253.133-.394-15.356c0-8.773 8.898-14.632 8.898-14.632l24.902-18.899.23-21.957c.099-11.586 14.161-8.074 14.9-2.746l.929 12.32 27.957-19.218-1.332-17.348c-1.684-18.79 13.906-15.934 15.473-6.645l1.382 11.723 40.06-30.813c1.124-59.816 1.394-84.433 16.64-85.214 15.347-.793 15.582 27.992 16.441 84.367l41.578 31.5 1.238-13.617c.727-8.04 14.368-9.961 13.961 5.703l-.578 19.851 28.23 19.61 1.47-11.293c1.144-10.13 13.925-11.024 14.453 4.734l.086 20.36c-.106.73 24.285 17.671 24.285 17.671 12.426 7.832 10.414 17.243 10.414 17.243l-.883 13.035-101.219-48.32c-8.77-4.383-21.469-5.977-29.902 4.152-4.383 5.422-8.399 26.183-8.086 29.84l-1.078 56.285c-.211 1.258 40.297 31.472 40.297 31.472 1.039 1.043 3.879 22.07 3.879 22.07l-50.547-14.195-4.797 13.149-2.93-13.426-51.21 14.234 3.292-21.25c7.2-4.484 41.281-31.671 41.594-32.613 0 0 .187-49.715.117-52.633-.426-16.914-.894-22.93-3.922-28.457-3.035-5.543-11.449-9.687-32.336-4.699C111.97 216 37.285 253.133 37.285 253.133Zm0 0'
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput placeholder='Email' style={styles.textInput} />
        <TextInput placeholder='Password' style={styles.textInput} />
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f1f1',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 30,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    fontSize: 20,
    backgroundColor: 'white',
  },
});
