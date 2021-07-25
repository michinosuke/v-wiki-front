import { gql } from '@apollo/client'

export const QueryArtistForUpdateGql = gql`
  query QueryArtistForUpdate($id: String!) {
    artist(id: $id) {
      id
      name
      isV
      vType
      nameRuby
      youtubeChannelId
      twitterId
      gender
      profile
      birthday
      age
      themeHue
      height
      heightUnit
      weight
      weightUnit
      annualIncome
      relatedArtists {
        relatedArtist {
          id
          name
          isV
          vType
          nameRuby
          youtubeChannelId
          twitterId
          gender
          profile
          birthday
          age
          height
          heightUnit
          weight
          weightUnit
          annualIncome
        }
        artistRelationType {
          positiveDirectionName
          negativeDirectionName
        }
        isPositiveDirection
      }
    }
  }
`