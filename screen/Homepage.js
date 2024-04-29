import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

export default function Homepage() {
  const navigation = useNavigation();
  const [likes, setLikes] = useState(0); 

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>facebook</Text>
        <View style={styles.headerIcons}>
          <AntDesign name="search1" size={24} color="black" style={styles.headerIcon} />
          <EvilIcons name="bell" size={30} color="black" style={styles.headerIcon} />
        </View>
      </View>

      
      <View style={styles.storiesContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.stories}>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBox}>
              <Image style={styles.storyImage} source={require('./story1.jpg')} />
            </View>
            <Text style={styles.storyText}>Lineo Moloi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBox}>
              <Image style={styles.storyImage} source={require('./Sbosh.jpg')} />
            </View>
            <Text style={styles.storyText}>Vaniswayo seboku</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBox}>
              <Image style={styles.storyImage} source={require('./Vani.jpg')} />
            </View>
            <Text style={styles.storyText}>Sebongile Nkopi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBox}>
              <Image style={styles.storyImage} source={require('./mphu.jpg')} />
            </View>
            <Text style={styles.storyText}>Ramphu Mpholle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBox}>
              <Image style={styles.storyImage} source={require('./Ntha.jpg')} />
            </View>
            <Text style={styles.storyText}>Nthatuwa Rapeane</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      
      <ScrollView style={styles.posts}>
       
        <View style={styles.post}>
        <Text style={styles.postText}>
              I am Mateke Mpholle. This account was created in the year 2017 and thank you all for following me.I am currently looking for beauty studio i can work with.
            </Text>
          <Image style={styles.postImage} source={require('./Me.jpg')} />
          <View style={styles.postContent}>
            
            <TouchableOpacity onPress={handleLike}>
              <AntDesign name="like2" size={20} color="black" style={styles.postIcon} />
            </TouchableOpacity>
            <Text style={styles.likesText}>{likes}</Text>
            
            <View style={styles.postIcons}>
              <EvilIcons name="comment" size={20} color="black" style={styles.postIcon} />
              <AntDesign name="sharealt" size={20} color="black" style={styles.postIcon} />
            </View>
          </View>
        </View>

        
        <View style={styles.post}>
        <Text style={styles.postText}>
        Exploring new places and trying new foods!  #travel #foodie

            </Text>
            
          <Image style={styles.postImage} source={require('./paradise.jpg')} />
          <View style={styles.postContent}>
            
            <TouchableOpacity onPress={handleLike}>
              <AntDesign name="like2" size={20} color="black" style={styles.postIcon} />
            </TouchableOpacity>
            <Text style={styles.likesText}>{likes}</Text>
            
            <View style={styles.postIcons}>
              <EvilIcons name="comment" size={20} color="black" style={styles.postIcon} />
              <AntDesign name="sharealt" size={20} color="black" style={styles.postIcon} />
            </View>
          </View>
        </View>
        
        <View style={styles.post}>
        <Text style={styles.postText}>
        Enjoying the beautiful sunset at the beach  #sunset #beachlife 
            </Text>
          <Image style={styles.postImage} source={require('./post3.jpg')} />
          <View style={styles.postContent}>
            
            <TouchableOpacity onPress={handleLike}>
              <AntDesign name="like2" size={20} color="black" style={styles.postIcon} />
            </TouchableOpacity>
            <Text style={styles.likesText}>{likes}</Text>
            
            <View style={styles.postIcons}>
              <EvilIcons name="comment" size={20} color="black" style={styles.postIcon} />
              <AntDesign name="sharealt" size={20} color="black" style={styles.postIcon} />
            </View>
          </View>
        </View>

        {}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1778F2', 
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 10,
  },
  storiesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  stories: {
    paddingBottom: 3,
  },
  storyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyBox: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  storyText: {
    marginTop: 5,
    textAlign: 'center',
  },
  posts: {
    flex: 1,
  },
  post: {
    flexDirection: 'column',
    padding: 19,
    alignItems: 'center', 
  },
  postImage: {
    width: 450,
    height: 150,
    borderRadius: 0,
    marginRight: 10,
  },
  postContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  postIcons: {
    flexDirection: 'row',
    marginLeft: 0,
  },
  postIcon: {
    marginRight: 90,
  },
  likesText: {
    marginRight: 40,
  },
});
