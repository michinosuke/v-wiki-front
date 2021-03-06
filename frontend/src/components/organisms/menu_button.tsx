import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '~/components/atoms/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faBars,
  faQuestion,
  faEdit,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useRecoilState } from 'recoil'
import { userSettingState } from '~/atoms/user-setting'
import { Colors } from '~/types/colors'

type Props = {
  colors: Colors
  className?: string
}

export const MenuButton: React.FC<Props> = ({ colors, className }) => {
  const [isExpand, setIsExpand] = useState(false)
  const [userSetting, setUserSetting] = useRecoilState(userSettingState)
  return (
    <div className={`${className ?? ''}`}>
      {isExpand ? (
        <div className="flex flex-col gap-3">
          <Button
            backgroundColor={colors.themeAA}
            textColor={'#fff'}
            borderColor={colors.themeAA}
            className="w-20 h-20 shadow-2xl"
          >
            <FontAwesomeIcon icon={faTwitter} size={'2x'} />
          </Button>
          <Button
            backgroundColor={colors.themeAA}
            textColor={'#fff'}
            borderColor={colors.themeAA}
            className="w-20 h-20 shadow-2xl"
            onClick={() =>
              setUserSetting({
                ...userSetting,
                isA11yMode: !userSetting.isA11yMode,
              })
            }
          >
            <FontAwesomeIcon icon={faEye} size={'2x'} />
          </Button>
          <Link href={'/create'}>
            <Button
              backgroundColor={colors.themeAA}
              textColor={'#fff'}
              borderColor={colors.themeAA}
              className="w-20 h-20 shadow-2xl"
            >
              <FontAwesomeIcon icon={faEdit} size={'2x'} />
            </Button>
          </Link>
          <Link href={'/about'}>
            <Button
              backgroundColor={colors.themeAA}
              textColor={'#fff'}
              borderColor={colors.themeAA}
              className="w-20 h-20 shadow-2xl"
            >
              <FontAwesomeIcon icon={faQuestion} size={'2x'} />
            </Button>
          </Link>
          <Button
            backgroundColor={colors.themeAA}
            textColor={'#fff'}
            borderColor={colors.themeAA}
            className="w-20 h-20 shadow-2xl"
            onClick={() => setIsExpand(false)}
          >
            <FontAwesomeIcon icon={faTimes} size={'2x'} />
          </Button>
        </div>
      ) : (
        <Button
          backgroundColor={colors.themeAA}
          textColor={'#fff'}
          borderColor={colors.themeAA}
          className="w-20 h-20 shadow-2xl"
          onClick={() => setIsExpand(true)}
        >
          <FontAwesomeIcon icon={faBars} size={'2x'} />
        </Button>
      )}
    </div>
  )
}
